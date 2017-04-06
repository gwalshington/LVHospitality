class ProfilesController < ApplicationController
  before_action :authenticate_user
  before_action :set_profile, only: [:show, :edit, :update, :destroy]

  # GET /profiles
  # GET /profiles.json
  def index
    @profiles = Profile.all
    @events = Event.where("user_id = ? AND date >= ?", current_user.id, Time.current.to_date).order('date ASC')
    #@24_events = Event.where("user_id = ? AND date >= ?", current_user.id, Date.today)



  end

  def admin
    #authenticate_admin
    if current_user.is_admin === true
      @events = Event.all
    else
      @name = current_user.first_name
      @liason_id = Liason.where(first_name: @name).first.id
      @liason_users = User.where(liason_id: @liason_id)
      @events = Event.joins(:user).where("users.liason_id = ?", 1)

      #@post = Post.joins(:taggings).where(taggings: {tag_id: 17})
    end
  end

  # GET /profiles/1
  # GET /profiles/1.json
  def show
  end
  
  def itinerary
    @profiles = Profile.all
    @events = Event.where("user_id = ? AND date >= ?", current_user.id, Time.current.to_date).order('date ASC')
    #@24_events = Event.where("user_id = ? AND date >= ?", current_user.id, Date.today)

    
  end

  # GET /profiles/new
  def new
    @profile = Profile.new
  end

  # GET /profiles/1/edit
  def edit
  end

  # POST /profiles
  # POST /profiles.json
  def create
    @profile = Profile.new(profile_params)

    respond_to do |format|
      if @profile.save
        format.html { redirect_to @profile, notice: 'Profile was successfully created.' }
        format.json { render :show, status: :created, location: @profile }
      else
        format.html { render :new }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /profiles/1
  # PATCH/PUT /profiles/1.json
  def update
    respond_to do |format|
      if @profile.update(profile_params)
        format.html { redirect_to @profile, notice: 'Profile was successfully updated.' }
        format.json { render :show, status: :ok, location: @profile }
      else
        format.html { render :edit }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /profiles/1
  # DELETE /profiles/1.json
  def destroy
    @profile.destroy
    respond_to do |format|
      format.html { redirect_to profiles_url, notice: 'Profile was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def profile_params
      params.fetch(:profile, {})
    end
end

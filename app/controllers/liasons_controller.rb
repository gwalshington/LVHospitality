class LiasonsController < ApplicationController
  before_action :set_liason, only: [:show, :edit, :update, :destroy]

  # GET /liasons
  # GET /liasons.json
  def index
    @liasons = Liason.all
  end

  # GET /liasons/1
  # GET /liasons/1.json
  def show
  end

  # GET /liasons/new
  def new
    @liason = Liason.new
  end

  # GET /liasons/1/edit
  def edit
  end

  # POST /liasons
  # POST /liasons.json
  def create
    @liason = Liason.new(liason_params)

    respond_to do |format|
      if @liason.save
        format.html { redirect_to @liason, notice: 'Liason was successfully created.' }
        format.json { render :show, status: :created, location: @liason }
      else
        format.html { render :new }
        format.json { render json: @liason.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /liasons/1
  # PATCH/PUT /liasons/1.json
  def update
    respond_to do |format|
      if @liason.update(liason_params)
        format.html { redirect_to @liason, notice: 'Liason was successfully updated.' }
        format.json { render :show, status: :ok, location: @liason }
      else
        format.html { render :edit }
        format.json { render json: @liason.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /liasons/1
  # DELETE /liasons/1.json
  def destroy
    @liason.destroy
    respond_to do |format|
      format.html { redirect_to liasons_url, notice: 'Liason was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_liason
      @liason = Liason.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def liason_params
      params.require(:liason).permit(:first_name, :phone, :email, :photo_path)
    end
end

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  

  def authenticate_user
  	if user_signed_in?
      @liason = Liason.find(current_user.liason_id)

  	else
  		redirect_to new_user_session_path
  	end
  end

  def authenticate_admin
  	if current_user.is_admin != true
  		redirect_to home_path
  	end
  end

end

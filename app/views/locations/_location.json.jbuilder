json.extract! location, :id, :location_name, :phone, :address, :lat, :lng, :created_at, :updated_at
json.url location_url(location, format: :json)

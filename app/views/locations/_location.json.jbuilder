json.extract! location, :id, :location_name, :lat, :lng, :created_at, :updated_at
json.url location_url(location, format: :json)

json.extract! event, :id, :date, :title, :subtitle, :description, :user_id, :created_at, :updated_at
json.url event_url(event, format: :json)

json.users @users.each do |u|
    json.extract! u, :username, :user_token
end
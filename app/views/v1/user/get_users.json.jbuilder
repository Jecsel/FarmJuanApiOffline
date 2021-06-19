json.users @users.each do |user|
    json.extract! user, :username
end
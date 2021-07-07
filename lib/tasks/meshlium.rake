namespace :meshlium do
  desc "TODO"
  task connect: :environment do

    connection = ActiveRecord::Base.establish_connection(
      :adapter  => "mysql2",
      :host     => "10.10.10.1",
      :port     => "3306",
      :username => "sslroot",
      :password => "libelium2007",
      :database => "MeshliumDB"
    )

    @connection = ActiveRecord::Base.connection
    p "=== connected ==="
    result = @connection.exec_query('SELECT * FROM sensors')
    result.each do |row|
      p row
    end

    # query_res = ActiveRecord::Base.connection.execute('Select * from sensors')
    # p "=== query ==="
    # p query_res
  end

end

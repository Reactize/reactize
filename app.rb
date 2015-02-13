require "sinatra"
use Rack::Deflater

get "/" do
  erb :index
end

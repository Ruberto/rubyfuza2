require 'rack'
require 'rack/contrib/try_static'

# Serve files from the public_html directory
use Rack::TryStatic,
  root: 'public_html',
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html']

run lambda{ |env|
  four_oh_four_page = File.expand_path("../public_html/404/index.html", __FILE__)
  [ 404, { 'Content-Type'  => 'text/html'}, [ File.read(four_oh_four_page) ]]
}
require 'count_characters'

RSpec.describe "count_chars" do
  it "Returns an object" do
    expect(count_characters("")).to eq({})
  end
end
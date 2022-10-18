require 'count_characters'

RSpec.describe "count_chars" do
  it "Returns an object" do
    expect(count_characters("")).to eq({})
  end
  it "Returns an object with a count" do
    expect(count_characters("a")).to eq({'a'=> 1})
  end
  it "Returns an object with the number of times" do
    expect(count_characters("aa")).to eq({'a'=> 2})
  end
  it "Returns an object with multiple keys" do
    expect(count_characters("ab")).to eq({'a'=> 1, 'b'=> 1})
  end
  it "Returns the correct test given in example" do
    expect(count_characters("aba")).to eq({'a'=> 2, 'b'=> 1})
  end
end
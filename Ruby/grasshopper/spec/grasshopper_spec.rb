require 'grasshopper'

RSpec.describe "check_for_factor" do
  it "returns true if given 10, 2" do
     expect(check_for_factor(10,2)).to be(true)
  end
  it "returns false if given 9, 2" do
    expect(check_for_factor(9,2)).to be(false)
  end
  it "returns true if given 63, 7" do
    expect(check_for_factor(63,7)).to be(true)
  end
  it "returns false if given 2453, 5" do
    expect(check_for_factor(2453,5)).to be(false)
  end
end
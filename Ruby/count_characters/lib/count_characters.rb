def count_characters(input_string)
  count_object = {}
  input_string.split('').each{|letter|
    if(count_object.key?(letter))
      count_object[letter] += 1
    else
      count_object[letter] = 1
    end
  }
  count_object
end
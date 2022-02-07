
let nums = [1,2,3,1]
var containsDuplicate = function(nums) {
    // let hash = {}
    // for(let i = 0 ; i < nums.length ; i++){
    //   if(Object.keys(hash).includes(String(nums[i]))){
    //      return true;
    //   }else{
    //       hash[nums[i]] =  1
    //   }
    // }
    // return false
    var set = new Set(nums);
    return set.size !== nums.length ? true : false;
};

/*
Approach 1.
FOR LOOP
O(N^2)-time complexity
O(N)-space complexity
*/

function twoNumberSum (array, targetSum) {
  const N = array.length;
  if (N < 1) {
    return [];
    
  for(let i = 0; i < N - 1; i++) {
    const firstNum = array[i];
    for(let j = i + 1); j < N; j++) {
      const secondNum = array[j];
        if(secondNum === targetSum - firstNum) {
          return [firstNum, secondNum];
          }
         }
       }
      return [];
     }
     
 
 /*
Approach 2.
HASH TABLE
O(N)-time complexity
O(N)-space complexity
*/
  
function twoNumberSum (array, targetSum) {
  const N = array.length;
  if (N < 1) {
    return [];
 
 const nums = {};
 for (let num of array) {
  let potentialMatch = targetSum - num;
    if(potentialMatch in nums) {
      return [num, potentialMatch];
    } else {
    nums[num] = true;
   }
  }
 return [];
}


/*
Approach 3.
SORT w/ POINTERS
O(Nlog(N))-time complexity
O(1)-space complexity
*/

function twoNumberSum (array, targetSum) {
  const N = array.length;
  if (N < 1) {
    return [];
    
array.sort((a,b) => a - b);
for(i = 0; i < N; i++){
  let left = 0;
  let right = N-1;
  while(left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum === targetSum) {
      return array[left], array[right];
     } else if(currentSum < targetSum) {
       left++;
      } else if(currentSum > targetSum) {
        right --;
        }
       }
       return [];
      }

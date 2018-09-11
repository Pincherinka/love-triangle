/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports =function getLoveTrianglesCount(preferences) {

  let count =0;
  
  for (let i=0; i<preferences.length; i++){
    
    for (let j=i+1; j<preferences.length; j++){
      
      for (let k=j+1; k<preferences.length; k++){        

        if (preferences[j]===k+1 && preferences[k]===i+1 && preferences[i]===j+1 && i!=j && j!=k){
          count++;          
        }
        else if (preferences[j]===i+1 && preferences[k]===j+1 && preferences[i]===k+1 && i!=j && j!=k){
          count++;          
        };
      }
    } 
  }
  return count;
};



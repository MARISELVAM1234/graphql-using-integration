import { gql } from "@apollo/client";



export const queryData = gql `
query Query {
  episodes{
    info {
      count
      pages
    }
    results{
      name
      id
      air_date
      characters {
        name
        species
        gender
        image

      }
    }
  
  }
}
`
// query Query {
//   characters( filter: { name: "morty" }) {
//   results{
//     name
//   }
  
    
    
//   }
  
// }
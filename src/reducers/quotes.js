export default (state = [], action) => {

  switch(action.type){

    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      let filteredArray = state.filter(quote => quote.id !== action.quoteId)
      return [...filteredArray]

    case "UPVOTE_QUOTE":
      let afterQuoteLiked = state.map(quote => {
        if(quote.id === action.quoteId){
          quote.votes += 1
        }
        return quote
      })  
      return [...afterQuoteLiked]

      case "DOWNVOTE_QUOTE":
        let afterQuoteDown = state.map(quote => {
          if(quote.id === action.quoteId){
            quote.votes -= 1
          }
          if(quote.votes < 0){
            quote.votes = 0
          }
          return quote
        }) 
        // debugger
        return [...afterQuoteDown]

    default: 
    return state;
  }

}

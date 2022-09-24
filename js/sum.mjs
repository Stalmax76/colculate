const sum = (a, b) => {
   try {
      if (typeof a === 'number' && typeof b === 'number') {
         return a + b
      }
      throw new SyntaxError('the data entered is incorrect')
   } catch (e) {
      console.log(e.message)
      return
   }
}

export default sum
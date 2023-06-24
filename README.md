# Accessible Tic-Tac-Toe Game

Create an accessible two-player tic-tac-toe game using React.

## Requirements
3x3 grid of buttons that allow two humans to alternate turns playing tic-tac-toe.
Rules of Tic-Tac-Toe
The computer calculates when a game is won or tied and announces the outcome.
Two functions are provided to calculate win or tie state (courtesy of ChatGPT)
Allow the players to customize their display names.
Option to let “X” or “O” start first.
Option to start over when the game is complete.
Must be keyboard navigable
Must pass WCAG 2.1 AA automated test with no reported issues (axe-core or other)
Can use create-react-app or another build template of your choice.

Time Box
Don't go beyond 2 hours just to complete this assignment. We'd rather see progress and explanation than a completely working end product.
Spend 90 minutes to build this project. Logic is provided for calculating wins and ties. 
An additional 30 minutes should be spent documenting your findings and recommendations.

Deliverables
Code package or github repository link: 
Contains build scripts, src folder, package.json, etc.
Optional: Link to live demo (Vercel or other)
Document: 
Detail the decisions made during the development process. 
Include examples of findings during testing and any corrections you needed to make.
Recommendations for further improvements you’d like to make.



Sample Code
Below you’ll find some sample code for calculating wins and ties based on a board array.

/**
* board is an array of 9 string values:
* Players 'x' and 'o', with empty positions as empty string ''
* [
* 'x', 'o', 'x',
* 'o', '',  'x',
* 'x', '',  'o'
* ]
*/
const checkWinner = board => {
  const lines = [
    // Board array is indexed such that top left is 0, bottom right is 8


    // Horizontal lines
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // Vertical lines
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // Diagonal lines
    [0, 4, 8], [2, 4, 6]
  ]


  for (const line of lines) {
    const [a, b, c] = line
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== " ") {
      return board[a] // Return the winning player string ('x' or 'o')
    }
  }


  return null // Return null if there is no winner yet
}


const checkTie = board => {
  // If no winners and no empty spaces on the board, return true
  if (checkWinner(board))
    return false
  return !board.includes("")
}


## Tools used

Create React App
HTML
CSS

## Things I would change

I'm slower now as I have not touched React in a hot minute while working at CVS

I would love to spend more time styling

Been debating about putting the game board in a table element instead of list for screen reader users

Would also love to re-organize the folder structure. My visually impaired self hates having the files all strung out here, but wanted to keep things simple for now
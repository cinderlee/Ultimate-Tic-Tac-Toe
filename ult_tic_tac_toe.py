class Board():
    def __init__(self):
        self.winner = None
        self.board = [["-", "-", "-"],
                      ["-", "-", "-"],
                      ["-", "-", "-"]]

    def done(self):
        pass


class Ultimate_board():
    def __init__(self):
        self.board = [[Board(), Board(), Board()],
                      [Board(), Board(), Board()],
                      [Board(), Board(), Board()]]

    def __str__(self):
        string = "+---------------+---------------+---------------+\n"
        for row in range(0,3):
            for board_row in range(0,3):
                for col in range(0,3):
                    if col == 0:
                        string += "|   "
                    for board_col in range(0,3):
                        string += str(self.board[row][col].board[board_row][board_col])
                        if board_col != 2:
                            string += " | "
                    string += "   |   "
                if board_row != 2:
                    string += "\n    ---------       ---------       ---------\n"
                else:
                    string += "\n+---------------+---------------+---------------+\n"

        return string


def main():
    x = Ultimate_board()
    p_one = input("Player One, X or O: ")
    p_two = None
    while p_one != "X" and p_one != "O":
        print("Invalid letter")
        p_one = input("Player One, X or O: ")
    if p_one == "X":
        p_two = "O"
        print("Player 1: X")
        print("Player 2: O")
    else:
        p_two = "X"
        print("Player 1: O")
        print("Player 2: X")
    print("Game Start!")
    done = False
    first = True
    freebie = False
    row = None
    col = None
    board_row = None
    board_col = None
    play_made = False
    while not done:
        print(x)
        if first:
            print("Player 1")
        else:
            print("Player 2")
        if not row and not col:
            print("Select a board")
            row = int(input("Row: "))
            col = int(input("Column: "))
        if x.board[row][col].winner:
            freebie = True
        while freebie:
            print("Freebie! Select a board")
            row = int(input("Row: "))
            col = int(input("Column: "))
            if not x.board[row][col].winner:
                freebie = False
        while not play_made:
            board_row = int(input("Select row: "))
            board_col = int(input("Select col: "))
            if x.board[row][col].board[board_row][board_col] == "-":
                if first:
                    x.board[row][col].board[board_row][board_col] = p_one
                else:
                    x.board[row][col].board[board_row][board_col] = p_two
                play_made = True
            else:
                print("Spot taken. Try again.")
        row = board_row
        col = board_col
        if first:
        	first = False
        else:
        	first = True
        play_made = False



main()

main = do
    putStrLn "Congratulations! You got the high score. Enter your name for the leaderboard."
    nameCheckLoop


data NameError = Success String | Failure String deriving (Show)

printLeaderBoard :: String -> IO ()
printLeaderBoard = putStrLn

checkName :: String -> NameError
checkName name
            | name `elem` successNames = Success name
            | null matchedChecks       = Success name
            | otherwise                = Failure failureMessage
  where failureMessage = snd . head $ matchedChecks
        matchedChecks = filter (\x -> fst x) checks
        checks = map (\(f,s) -> (f name, s)) nameChecks
        
nameCheckLoop :: IO ()
nameCheckLoop = do
  name <- getLine
  let nameCheck = checkName name
  case nameCheck of Success name -> printLeaderBoard name
                    Failure message -> do
                      putStrLn message
                      nameCheckLoop

successNames :: [String]
successNames = ["Mark", "Chungus"]


nameChecks :: [(String -> Bool, String)]
nameChecks = [
             ((==) "Marc", "No, that's wrong")
             ]

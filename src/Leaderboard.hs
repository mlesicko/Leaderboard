module Leaderboard
    ( leaderboard
    ) where

import Data.Char
import Data.List

leaderboard = do
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
             ((==) "Marc", "No, that's wrong"),
             (null,
               "Your name cannot be nothing"),
             (isUpper . (!!0),
               "Your name must not begin with a capital letter"),
             (not . any isUpper,
               "Your name must contain a capital letter"),
             (not . any isDigit,
               "Your name must have at least one number"),
             ((>) 2 . length . filter isDigit,
               "Your name must have at least two numbers"),
             (all isAlphaNum,
               "Your name must contain a special character"),
             (('@' `elem`),
               "Your name must not contain @"),
             (('#' `elem`),
               "Your name must not contain #"),
             (('$' `elem`),
               "Your name must not contain $"),
             ((' ' `elem`),
               "Your name must not contain spaces"),
             (anyIsInfixIgnoreCase ["mickey","mouse"],
                "That name is under trademark by the Walt Disney Corporation"),
             ((>3) . length . filter isVowel,
                "Your name contains too many vowels"),
             (containsASwear,
                "No swearing!"),
             (anyIsInfixIgnoreCase (map show [1900..2017]),
                "Your name cannot contain someone's birth year"),
             (isInfixOf "33",
                "That name is too Masonic"),
             (isInfixOf "666",
                "That name is too Satanic"),
             (isInfixOf "420",
                "That name is prohibited under Federal Law"),
             (any isMark,
                "This is America"),
             (isIgnoreCaseOrdered,
                "The letters of your name may not be in alphabetical order")
             ]

isInfixIgnoreCase :: String -> String -> Bool
isInfixIgnoreCase s1 s2 = isInfixOf s1 . map toLower $ s2

anyIsInfixIgnoreCase :: [String] -> String -> Bool
anyIsInfixIgnoreCase xs s = any (\x -> isInfixIgnoreCase x s) xs

isVowel :: Char -> Bool
isVowel c = elem (toLower c) ['a','e','i','o','u']

swears :: [String]
swears = ["fuck", "shit", "ass", "butt", "cunt", "damn", "hell"
         ,"balls","tits"]

containsASwear :: String -> Bool
containsASwear s = not . null $ intersect swears (swearFiltered s)
  where swearFiltered = (\x -> map ($x) (map (\swear -> filter (`elem` swear)) swears))

isIgnoreCaseOrdered :: String -> Bool
isIgnoreCaseOrdered s = lowerLetters == sort lowerLetters
  where lowerLetters = map toLower . filter isAlpha $ s

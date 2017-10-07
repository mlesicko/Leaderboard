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
printLeaderBoard s = putStrLn $ "\n\n " ++ s 
                 ++ (replicate (8 - length s) ' ')
                 ++ " --- 218349000"
                 ++ "\n adeV32&_ --- 194682000"
                 ++ "\n aCHlr-92 --- 181772000"
                 ++ "\n 15%einNp --- 180948000"
                 ++ "\n d0G3zzz( --- 178225000"

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
             (containsASwear,
                "No swearing!"),
             (anyIsInfixIgnoreCase ["mickey","mouse"],
                "That name is under trademark by the Walt Disney Corporation"),
             (anyIsInfixIgnoreCase naughtyWords,
                "That name is not family friendly"),
             (anyIsInfixIgnoreCase presidents,
                "For reasons of National Security, your name may not contain the name of any current of former U.S. President"),
             (anyIsInfixIgnoreCase colors,
                "That's racist!"),
             (anyIsInfixIgnoreCase emoWords,
                "That name is too emo"),
             (isUpper . (!!0),
               "Your name must not begin with a capital letter"),
             (not . any isUpper,
               "Your name must contain a capital letter"),
             (not . any isDigit,
               "Your name must have at least one number"),
             ((>) 2 . length . filter isDigit,
               "Your name must have at least two numbers"),
             (isInfixOf "33",
                "That name is too Masonic"),
             (isInfixOf "666",
                "That name is too Satanic"),
             (isInfixOf "420",
                "That name is prohibited under Federal Law"),
             (anyIsInfixIgnoreCase (map show [1900..2017]),
                "Your name cannot contain someone's birth year"),
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
             ((>3) . length . filter isVowel,
                "Your name contains too many vowels"),
             (any isMark,
                "This is America"),
             ((>8) . length,
                "Your name is too long"),
             ((<8) . length,
                "Your name is too short"),
             (not . isIgnoreCaseOrdered,
                "The letters of your name must be in alphabetical order")
             ]

isInfixIgnoreCase :: String -> String -> Bool
isInfixIgnoreCase s1 s2 = isInfixOf s1 . map toLower $ s2

anyIsInfixIgnoreCase :: [String] -> String -> Bool
anyIsInfixIgnoreCase xs s = any (\x -> isInfixIgnoreCase x s) xs

isVowel :: Char -> Bool
isVowel c = elem (toLower c) ['a','e','i','o','u']

swears :: [String]
swears = ["fuck", "shit", "ass", "damn", "hell"]

naughtyWords :: [String]
naughtyWords = ["boobs","penis","ball","tit","butt","dong","69"
               ,"sex", "cunt"]

presidents :: [String]
presidents = ["george", "john", "thomas", "james", "andrew"
            ,"martin", "william", "zachary", "millard"
            ,"franklin","abraham","ulysses","rutherford"
            ,"chester","grover","benjamin","theodore"
            ,"woodrow","warren","calvin","herbert"
            ,"harry","dwight","lyndon","richard"
            ,"gerald","ronald","barack"
            ,"dick","bill","jimmy","abe"
            ]

colors :: [String]
colors = ["black","white","red","yellow","brown","blue"
         ,"green","orange"]

emoWords :: [String]
emoWords = ["xxx","random","doom","spork"]

containsASwear :: String -> Bool
containsASwear s = not . null $ intersect swears swearFiltered
  where swearFiltered = (\x -> map ($x) (map (\swear -> filter (`elem` swear)) swears)) lowercase
        lowercase = map toLower s

isIgnoreCaseOrdered :: String -> Bool
isIgnoreCaseOrdered s = lowerLetters == sort lowerLetters
  where lowerLetters = map toLower . filter isAlpha $ s

(ns leaderboard.test-name
  (:require [superstring.core :as string]
            [cuerdas.core :as string2]
            [clojure.string :refer [includes?]]))

(defn check-for-substrings [string substrings]
  (let [lcstring (string/lower-case string)]
    (some (partial includes? lcstring) substrings)))

(declare presidents)
(declare colors)
(declare disney)
(declare emo)
(declare naughty)
(declare check-for-swears)
(declare swears)
(declare digits)
(declare vowels)
(declare is-alphabetical?)

(def length 8)

(defn test-name [user-name]
  (cond
    (string/blank? user-name) "Your name can not be nothing."
    (= user-name "Mark") true
    (= user-name "Chungus") true
    (= user-name "Marc") "No, that's wrong."
    (check-for-substrings user-name presidents) "For National Security reasons, your name cannot contain the name of any current or former US Presidents."
    (check-for-substrings user-name colors) "That's racist."
    (check-for-substrings user-name disney) "This name is under copyright by the Walt Disney Corporation."
    (check-for-substrings user-name emo) "That name is too emo."
    (check-for-substrings user-name naughty) "That is not family-friendly."
    (check-for-swears user-name swears) "No swearing!"
    (string/upper-case? (first user-name)) "Your name must not begin with a capital letter."
    (not (some string/upper-case? user-name)) "Your name must contain a capital letter."
    (not (some string2/digits? user-name)) "Your name must contain at least one number."
    (< (count (filter string2/digits? user-name)) 2) "Your name must contain at least two numbers."
    (some #(includes? user-name %) (map str (range 1900 2017))) "Your name cannot contain someone's birth year."
    (includes? user-name "1") "Your name cannot contain the number 1."
    (includes? user-name "33") "That name is too Masonic."
    (includes? user-name "666") "That name is too Satanic."
    (includes? user-name "420") "That name is prohibited under Federal Law."
    (every? string2/alnum? user-name) "Your name must contain a special character."
    (includes? user-name "@") "Your name may not contain @"
    (includes? user-name "#") "Your name may not contain #"
    (includes? user-name "!") "Your name may not contain !"
    (includes? user-name "$") "Your name may not contain $"
    (includes? user-name " ") "Your name may not contain spaces."
    (> (count (filter vowels user-name)) 3) "Your name contains too many vowels."
    (> (count user-name) length) "Your name is too long."
    (< (count user-name) length) "Your name is too short."
    (not (is-alphabetical? user-name)) "The letters in your name must appear in alphabetical order."
    :else true))

(defn is-alphabetical? [user-name]
  (let [letters (filter string2/letters? (string/lower-case  user-name))]
    (= letters (sort letters))))

(defn check-for-swear [user-name swear]
  (let [swear-set (into #{} swear)]
    (= (reverse (into '() swear))
       (filter swear-set user-name))))

(defn check-for-swears [user-name swears]
  (some
    (partial check-for-swear user-name)
    swears))

(def digits
  #{"0"
    "1"
    "2"
    "3"
    "4"
    "5"
    "6"
    "7"
    "8"
    "9"})

(def vowels
  #{"a"
    "e"
    "i"
    "o"
    "u" })

(def swears
  #{"fuck"
    "shit"
    "ass"
    "damn"
    "hell"
    "bitch"})

(def naughty
  #{"boobs"
    "penis"
    "ball"
    "tit"
    "butt"
    "dong"
    "69"
    "sex"
    "cunt"})

(def disney
  #{"mickey"
    "mouse"})

(def emo
  #{"xxx"
    "random"
    "doom"
    "spork"}) 

(def colors
  #{"black"
    "white"
    "red"
    "yellow"
    "brown"
    "blue" 
    "green"
    "orange"})

(def presidents
  #{"george"
    "john"
    "thomas"
    "james"
    "andrew" 
    "martin" 
    "william"
    "zachary"
    "millard" 
    "franklin"
    "abraham"
    "ulysses"
    "rutherford" 
    "chester"
    "grover"
    "benjamin"
    "theodore" 
    "woodrow"
    "warren"
    "calvin"
    "herbert"
    "harry"
    "dwight"
    "lyndon"
    "richard" 
    "gerald"
    "ronald"
    "barack"
    ; "donald" ?
    "dick"
    "bill"
    "jimmy"
    "abe"})



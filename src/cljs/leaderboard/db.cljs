(ns leaderboard.db
  (:require [re-frame.core :as re-frame]))

(def default-db
  {:name "Leaderboard"
   :user-name ""
   :error-message ""
   :typed-name ""
   :tetris-height -400
   :mode :tetris })

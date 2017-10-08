(ns leaderboard.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  :name
  (fn [db]
    (:name db)))

(re-frame/reg-sub
  :user-name 
  (fn [db]
    (:user-name db)))

 (re-frame/reg-sub
  :typed-name 
  (fn [db]
    (:typed-name db)))

(re-frame/reg-sub
  :error-message
  (fn [db]
    (:error-message db)))

(re-frame/reg-sub
  :mode
  (fn [db]
    (:mode db)))

(re-frame/reg-sub
  :tetris-height
  (fn [db]
    (:tetris-height db)))

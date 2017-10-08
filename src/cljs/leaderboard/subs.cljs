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
  :error-message
  (fn [db]
    (:error-message db)))

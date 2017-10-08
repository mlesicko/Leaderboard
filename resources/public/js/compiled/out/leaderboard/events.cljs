(ns leaderboard.events
  (:require [re-frame.core :as re-frame]
            [leaderboard.db :as db]
            [leaderboard.test-name :refer [test-name]]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
  :test-name
  (fn [db [ _ new-name]]
    (let [test-result (test-name new-name)]
      (if (= test-result true)
        (assoc db
               :user-name
               new-name)
        (assoc db
               :error-message
               test-result)))))

(re-frame/reg-event-db
  :clear-error
  (fn [db _]
    (assoc db
           :error-message
           "")))

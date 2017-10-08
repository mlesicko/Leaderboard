(ns leaderboard.events
  (:require [re-frame.core :as re-frame]
            [leaderboard.db :as db]
            [leaderboard.test-name :refer [test-name]]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   (assoc db/default-db
          :anim-interval
          (js/setInterval #(re-frame/dispatch  [:tick]) 400))))

(re-frame/reg-event-db
  :tick
  (fn [db _]
    (if (= (:tetris-height db) 0)
      (do
        (re-frame/dispatch [:stop-ticking])
        db)
      (update db
              :tetris-height
              + 25))))

(re-frame/reg-event-db
  :stop-ticking
  (fn [db _]
    (js/clearInterval (:anim-interval db))
    (assoc
      db
      :mode
      :enter-name)))

(re-frame/reg-event-db
  :test-name
  (fn [db [ _ new-name]]
    (let [test-result (test-name new-name)
          db-with-name (assoc db :typed-name new-name)
          ]
      (if (= test-result true)
        (assoc db-with-name
               :user-name
               new-name
               :mode
               :winner)
        (assoc db-with-name
               :error-message
               test-result)))))

(re-frame/reg-event-db
  :clear-error
  (fn [db _]
    (assoc db
           :error-message
           "")))

(re-frame/reg-event-db
  :update-mode
  (fn [db [_ new-mode]]
    (assoc db
           :mode
           new-mode)))

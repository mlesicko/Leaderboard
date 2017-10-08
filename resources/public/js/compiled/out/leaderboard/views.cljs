(ns leaderboard.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [reagent.core :as reagent]))

(defn title [mode]
  (fn []
    [re-com/title
     :label (if (= @mode :tetris)
              "Open Source Block Game" 
              "Congratulations!")
     :level :level1
     :style { :margin :auto }
     ]))

(defn block [y]
  [:rect
   {:width "200px"
    :height "400px"
    :fill "purple"
    :y @y}])

(defn board [block-height]
  [:svg
   {:style {:margin :auto
            :width "200px"
            :height "400px"
            :border  "1px solid black"}}
   [block block-height]])

(defn tetris []
  (let [height (re-frame/subscribe [:tetris-height])]
    [re-com/v-box
     :children [[board height]]]))

(defn name-screen [error-message typed-name]
  [re-com/v-box
   :style { :margin :auto }
   :children [[re-com/title
               :label "Please enter your name for posterity on the leaderboard:"
               :level :level2
               :style { :margin :auto
                       :padding 10 }]
              [re-com/box 
               :style { :margin :auto }
               :child [re-com/input-text
                       :model typed-name
                       :status (when (not (empty? @error-message)) :error)
                       :status-icon? true
                       :on-change #(re-frame/dispatch [:test-name %])
                       :attr {:auto-focus true}]]
              (when (not (empty? @error-message))
                [re-com/alert-box
                 :alert-type :danger
                 :closeable? true
                 :on-close #(re-frame/dispatch [:clear-error])
                 :body  [re-com/label
                         :label @error-message]])]])

(defn leaderboard [user-name]
  [re-com/v-box
   :style { :margin :auto }
   :children [[re-com/title
               :label "Now everyone will know YOU are the best!"
               :level :level2
               :style { :margin :auto }]
              [:table
               {:style { :margin :auto }}
               [:tbody 
                [:tr 
                 [:th
                  "Player" ]
                 [:th ""]
                 [:th "Score"] ]
                [:tr 
                 [:td @user-name]
                 [:td "........."]
                 [:td "218349000"]]
                [:tr 
                 [:td "adeV32&_"]
                 [:td "........."]
                 [:td "194682000"]]
                [:tr 
                 [:td "aCHlr-92"]
                 [:td "........."]
                 [:td "181772000"]]
                [:tr 
                 [:td "55%einNp"]
                 [:td "........."]
                 [:td "180948000"]]
                [:tr 
                 [:td "d0G3zzz("]
                 [:td "........."]
                 [:td "178225000"]]]]
              [re-com/button
               :label "Play Again!"
               :on-click #(re-frame/dispatch [:initialize-db])
               :style { :margin :auto }]]])


(defn main-panel []
  (fn []
    (let [error-message (re-frame/subscribe [:error-message])
          user-name (re-frame/subscribe [:user-name])
          typed-name (re-frame/subscribe [:typed-name])
          mode (re-frame/subscribe [:mode])]
      [re-com/v-box
       :height "100%"
       :style {:margin-top "15%" }
       :children [[title mode]
                  (case @mode
                   :tetris [tetris]
                   :enter-name [name-screen error-message typed-name]
                   :winner [leaderboard user-name]
                   [re-com/label
                    :label (str "Sad!" @mode)])]])))

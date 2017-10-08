(ns leaderboard.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]))

(defn title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Hello from " @name)
       :level :level1])))

(defn main-panel []
  (fn []
    (let [error-message (re-frame/subscribe [:error-message])
          user-name (re-frame/subscribe [:user-name]) ]
      [re-com/v-box
       :height "100%"
       :children [[title]
                  (if (clojure.string/blank? @user-name)
                    [re-com/v-box
                     :children [ [re-com/input-text
                                  :model ""
                                  :on-change #(re-frame/dispatch [:test-name %])]
                                (when (not (empty? @error-message))
                                  [re-com/modal-panel
                                   :child  [re-com/v-box
                                            :width "300px"
                                            :children [[re-com/label
                                                        :label @error-message]
                                                       [re-com/button
                                                        :label "Okay"
                                                        :on-click #(re-frame/dispatch [:clear-error])
                                                        ]]]])]]
                    [re-com/v-box
                     :children [[re-com/title
                                 :label "Now everyone will know YOU are the best!"
                                 :level :level2]
                                [:ol
                                 [:li @user-name]
                                 [:li "adeV32&_"]
                                 [:li "aCHlr-92"]
                                 [:li "55%einNp"]
                                 [:li "d0G3zzz("]]
                                [re-com/button
                                 :label "Play Again!"
                                 :on-click #(re-frame/dispatch [:initialize-db])] ]])]])))

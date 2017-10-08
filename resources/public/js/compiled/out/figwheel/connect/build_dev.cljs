(ns figwheel.connect.build-dev (:require [leaderboard.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/leaderboard.core.mount-root (apply js/leaderboard.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'leaderboard.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})


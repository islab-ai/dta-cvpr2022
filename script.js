function simulation_video(action, video_name){
    const attack_types = ["normal", "random", "camou", "er", "dta"];
    for (i in attack_types){
        let video_obj = document.getElementById(video_name + "_" + attack_types[i]);
        if (action == "play"){
            if (video_obj.paused) 
                video_obj.play(); 
            else 
                video_obj.pause(); 
        } else if (action == "restart"){
            video_obj.load()
        }
    }
}
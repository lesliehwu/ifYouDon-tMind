function tellTime(hour, min, per){
	if(per==="AM" && min>=30){
		if(min===30){
			if(hour===12){
				return("It's half past midnight");
			}
			else{
				return("It's half past " + hour + " in the morning");
			}
		}
		else{
			if(hour===12){
				return("It's almost 1 in the morning");
			}
			else{
				return("It's almost " + (hour+1) + " in the morning");
			}
		}
	}
	if(per==="AM" && min<30){
		if(min===15){
			if(hour===12){
				return("It's a quarter after midnight");
			}
			else{
				return("It's a quarter after " + hour + " in the morning");
			}
		}
		else if(min===5){
			if(hour===12){
				return("It's 5 after midnight");
			}
			else{
				return("It's 5 after " + hour + " in the morning");
			}
		}
		else{
			if(hour===12){
				return("It's just after midnight");
			}
			else{
				return("It's just after " + hour + " in the morning");
			}
		}
	}
	if(per==="PM" && min>=30){
		if(min===30){
			if(hour >= 1 && hour <= 5){
				return("It's half past " + hour + " in the afternoon");
			}
			if(hour===12){
				return("It's half past noon");
			}
			else{
				return("It's half past " + hour + " in the evening");
			}
		}
		else{
			if(hour >= 1 && hour <= 5){
				return("It's almost " + (hour+1) + " in the afternoon");
			}
			if(hour===12){
				return("It's almost 1 in the afternoon");
			}
			else{
				return("It's almost " + (hour+1) + " in the evening");
			}
		}
	}
	if(per==="PM" && min<30){
		if(min===15){
			if(hour >= 1 && hour <= 5){
				return("It's a quarter after " + hour + " in the evening");
			}
			if(hour===12){
				return("It's a quarter after noon");
			}
			else{
				return("It's a quarter after " + hour + " in the evening");
			}
		}
		else if(min===5){
			if(hour >= 1 && hour <= 5){
				return("It's 5 after " + hour + " in the afternoon");
			}
			if(hour===12){
				return("It's 5 after noon");
			}
			else{
				return("It's 5 after " + hour + " in the evening");
			}
		}
		else {
			if(hour >= 1 && hour <= 5){
				return("It's just after " + hour + " in the afternoon");
			}
			if(hour===12){
				return("It's just after noon");
			}
			else{
				return("It's just after " + hour + " in the evening");
			}
		}
    }
};

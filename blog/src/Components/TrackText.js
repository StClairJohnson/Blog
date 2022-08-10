import React from 'react'
import Stack from '@mui/material/Stack'
import Struggle from './Screenshot_20220718-064445_Photos.jpg'
import Awards from './20220718_051047.jpg'

function TrackText () {

    return (
    <div>
        <h2>How it Started</h2>
        <p>
            I first tried out for the track team in 6th Grade. It was the first official sport I 
            played. I chose track because I always loved racing my friends in my neighborhood,
            so i thought running around a track wouldn't be that difficult. I ended up 
            enjoying the experience and even though I wasn't all that great at first,
            I was determined to get better and become the best runner I could. I then 
            went on to participate in Track and Field throughout my middle school career.
        </p>
        <h2>High School Running</h2>
        <Stack direction="row">
        <p>
            Because i enjoyed running track in middle school so much, I decided to try out
            for the running sports in high school. Unfortunately, Track and Field season
             was't until the spring. So when I saw that Cross Country was available in the 
             fall, I decided to try out for that instead. At first, I hated this sport with 
             a passion. After my middle school years, I came to the conclusion that I am a 
             distance runner since I was decent at the mile and the half-mile. But when I was 
             required to run three miles without stopping up hills and through the forest, 
             I was not happy about that.
        </p>
        <img className="vertical-photo-right" src={Struggle} alt="pain"></img>
        </Stack>
        <p>
            It took a lot of mental fortitute and willpower to continue with this sport despite
             my dislike for it at first. Since I was new and not used to running those types 
             of distances, I often came in last or close to last during my first year. It very 
             disheartening and I even quit the sport for about a week. But I soon realized that 
             I may have a rough start, but i'll get better eventually because I have three more 
             years of year-round running to get better. Luckily, the coach let me come back and 
             I only got better from there. I had also participated in Indoor Track and Track and
             Field during my high school career. After the torture of Cross Country, It helped
             me improve at the track events I did before.
        </p>
        <h2>Conclusion</h2>
        <Stack direction="column">
        <p>
            I had faced a large amount of struggles, both physical and mental, and have growm as 
            a person from each and every one of them. It was because I had perservereance and 
            determination that someone who was always in last recieved many awards for their hard 
            work later down the line. Of course I wasn't the best at this sport and I still have 
            room for improvement. But I can proudly say that running track and cross country was 
            one of the best decisions that I had ever made. 
        </p>
        <img className="awards" src={Awards} alt="pain"></img>
        </Stack>
    </div>
    )
}

export default TrackText;
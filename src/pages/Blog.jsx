import { useState } from "react";
import BlogContent from "../components/BlogContent";

export default function Blog() {
  const blogData =[
    {
      img: "assets/blog-1.webp",
      time: "May 1, 2023",
      title: " The one thing I would tell to my 16 year old self",
      des: "Looking back, there’s so much I wish I could tell my younger self—about self-worth, handling pressure, and embracing uncertainty. In this post, I reflect on the lessons I’ve learned over the years and the advice I’d give to a 16-year-old me navigating life’s challenges.",
      views: "1.2k",
      like: "410",
    },
    {
      img : 'assets/blog-2.webp',
      time : 'Jun 7, 2023',
      title : 'Can’t stop scrolling through your friends’ feed?',
      des : 'Endless scrolling through social media can feel addictive and draining. In this post, I explore why we get caught in the comparison trap, how it affects our mental health, and share tips to break free and reclaim our time.',
      views : '900',
      like : '240'
    },
    {
      img : 'assets/blog-3.webp',
      time : 'Sep 3, 2023',
      title : 'How I stopped being afraid of being weak',
      des : 'For years, I equated vulnerability with weakness. In this post, I share how embracing my fears and imperfections helped me grow stronger and more confident, proving that true strength comes from accepting all parts of ourselves.',
      views : '1.7k',
      like : '805'
    },
    {
      img : 'assets/blog-4.webp',
      time : 'Nov 16, 2023',
      title : '5 great side effects of running with music',
      des : 'Running with music is more than just a way to pass the time—it can boost your mood, improve your pace, and make the miles fly by. In this post, I explore five surprising benefits of pairing your workouts with your favorite tunes.',
      views : '759',
      like : '310'
    },
    {
      img : 'assets/blog-5.webp',
      time : 'Dec 25, 2023',
      title : '5 things that would make you sleep better',
      des : 'Struggling to get a good nights sleep? In this post, I share five simple but effective tips to improve your sleep quality, from creating a relaxing bedtime routine to adjusting your sleep environment for optimal rest.',
      views : '1k',
      like : '256'
    },
    {
      img : 'assets/blog-6.webp',
      time : 'Dec 31, 2023',
      title : 'Detoxing my social media feed',
      des : 'Feeling overwhelmed by the endless stream of content on your social media? In this post, I share how I cleaned up my feed, unfollowed negativity, and created a healthier, more positive online space that boosts my mental well-being.',
      views : '2.5k',
      like : '360'
    },
    {
      img : 'assets/blog-7.webp',
      time : 'Jan 16, 2024',
      title : 'Anxiety attack at workplace: dos and don’ts',
      des : 'Experiencing an anxiety attack at work can be overwhelming, but knowing how to handle it can make a big difference. In this post, I share essential dos and donots to help you manage anxiety in the workplace, stay calm, and regain control in stressful moments.',
      views : '1.3k',
      like : '105'
    },
    {
      img : 'assets/blog-8.webp',
      time : 'Feb 14, 2024',
      title : '10 signs you must be a people pleaser',
      des : 'Constantly putting others needs before your own? You might be a people pleaser. In this post, I break down 10 common signs of people-pleasing behavior and how it can impact your mental health, along with tips to set healthier boundaries.',
      views : '1.6k',
      like : '655'
    },
    {
      img : 'assets/blog-9.jpg',
      time : 'Aug 6, 2024',
      title : 'Breaking Free from People-Pleasing: How to Set Boundaries and Prioritize Yourself',
      des : 'Tired of constantly seeking approval and putting others first? This post explores the root causes of people-pleasing, its impact on your well-being, and practical steps to regain control by setting boundaries and prioritizing your own needs.',
      views : '520',
      like : '103'
    }
  ];


  return (
      <div className="px-5 row d-flex justify-content-between gap-3 blog_main mb-5">
        <h1 className="text-center mt-3">MY BLOG</h1>
        <BlogContent blogData={blogData}/>
      </div>
  );
}

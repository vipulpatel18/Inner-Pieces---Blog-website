import React from 'react'

export default function AboutContant() {
  return (
    <section className="container my-5">
        <div className="row">
          <div className="col-md-4 about-img-box p-4">
            <img
              src="assets/about-img.webp"
              className="img-fluid rounded-circle"
              alt=""
            />
            <img src="assets/blog-7.webp" className="w-75 mt-5 ms-5 rounded" alt="" />
          </div>
          <div className="col-md-8 ps-5">
            <h1>Hi! I’m Dena,</h1>
            <p>
              <strong className="fs-4">Welcome to my corner of the internet! I’m Dena,</strong> <br/> a mental health advocate and blogger dedicated to exploring the multifaceted journey of mental well-being. My passion lies in sharing insights, personal experiences, and practical tips that can help you navigate your own mental health journey.
            </p>
            <h2>My Story</h2>
            <p>
            I’ve been on a personal journey with mental health for many years, and through this blog, I aim to provide support and inspiration to others who might be facing similar challenges. I believe that everyone deserves to feel heard, understood, and supported, and I’m committed to creating a space where we can openly discuss and address mental health issues.
            </p>
            <h2>What I Write About</h2>
            <p>
            On my blog, you'll find a variety of topics that reflect both my personal experiences and my commitment to mental well-being:
            </p>
            <ul>
              <li><b>Personal Reflections:</b> From sharing what I would tell my 16-year-old self to discussing how I overcame fears of vulnerability, I delve into personal stories that resonate with many.</li>
              <li><b>Practical Tips:</b> Explore advice on how to improve sleep, the benefits of listening to music while running, and strategies for detoxing your social media feed.</li>
              <li><b>Self-Care Strategies:</b> Learn about the positive side effects of incorporating mindful practices into your daily routine and other ways to enhance your mental health.</li>
            </ul>
            <h2>Why I Write</h2>
            <p><b>My goal is simple: </b>to offer support and foster a community where mental health is openly discussed. I believe in the power of shared experiences and practical advice to help others feel less alone and more empowered in their mental health journey.</p>
          </div>
        </div>
      </section>
  )
}

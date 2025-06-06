import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import linkedin_icon from './linkedin_icon.png'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.png'
import sample_img_6 from './sample_img_6.png'
import profile_img_1 from './profile_img_1.jpg'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import footer_logo from './logo_footer.svg'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    linkedin_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    footer_logo,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Varun Bharadwaj',
        role:'Digital Creator',
        stars:5,
        text:`As a content creator, InkPix has been a total game changer. I can turn any idea into a visual instantly — no need to wait or hire designers. It's fast, accurate, and the quality is top-notch!`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Startup Founder',
        stars:4,
        text:`We use InkPix for generating product mockups and marketing visuals — it's saving us hours each week. The credit system keeps things simple and scalable for our small team`
    },
    {
        image:profile_img_3,
        name:'Prajwal P B',
        role:'Creator & Developer',
        stars:5,
        text:`InkPix has completely transformed how I create visual content. Generating stunning images from just a few words is mind-blowing — and with the credit-based model, it’s super easy to manage usage. It’s like having a designer in your pocket!`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 25,
      credits: 5,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 100,
      credits: 20,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 200,
      credits: 50,
      desc: 'Best for enterprise use.'
    },
  ]
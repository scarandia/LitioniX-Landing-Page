import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { HomeFeature, HomeHero, HomePopularCourse, HomeOurMentors, HomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/benefits'))
const DynamicHomePopularCourse = dynamic(() => import('../components/product/popular-products'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/history'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/old_products'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/LocationSection'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home

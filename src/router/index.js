import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '../page/home'
import Job from '../page/job'
import Course from '../page/course'
import Teachers from '../page/teachers'
import Us from '../page/us'
import Apply from '../page/apply'
import Homes from '../page/homes'
import Jobs from '../page/jobs'
import Courses from '../page/courses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
		  path: '/Job',
		  component: Job
		},
		{
			path: '/Course',
		  component: Course
		},
		{
			path: '/Teachers',
		  component: Teachers
		},
		{
			path: '/Us',
		  component: Us
		},
		{
			path: '/Apply',
		  component: Apply
		},
		{
			name:'Homes',
			path: '/Homes',
		  component: Homes
		},
		{
			name:'Jobs',
			path: '/Jobs',
		  component: Jobs
		},
		{
			name:'Courses',
			path: '/Courses',
		  component: Courses
		},
  ]
})

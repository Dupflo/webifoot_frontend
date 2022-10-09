import React from 'react'
import { InlineWidget } from 'react-calendly'

const Calendar = () => {
  return (
    <section className="bg-primary text-white text-center px-12 py-10">
      <h2 className="text-4xl font-semibold">Vous avez des questions ?</h2>
      <p className="text-3xl">Planifions un rendez-vous Visio</p>
      <InlineWidget
        url="https://calendly.com/webifoot/webifoot?month=2022-10"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          hideGdprBanner: true,
          primaryColor: '273C9A',
          textColor: '233552',
        }}
        styles={{ height: '685px' }}
      />
    </section>
  )
}

export default Calendar

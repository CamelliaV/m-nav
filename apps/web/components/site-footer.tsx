'use client'

import { siteConfig } from '@/config/site'
import { useState, useEffect } from 'react'

export function SiteFooter() {
  // 1. State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date())

  // 2. Effect to set up the timer
  useEffect(() => {
    // Set up an interval to update the time every second (1000ms)
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // 3. Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timerId)
    }
  }, []) // 4. Empty dependency array ensures this effect runs only once on mount

  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left flex justify-between">
            <span>
              {/* 5. Display the formatted time from state */}
              {currentTime.toLocaleString(undefined, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
            <span>
              source code on{' '}
              <a
                href='https://github.com/busyhe/m-nav'
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

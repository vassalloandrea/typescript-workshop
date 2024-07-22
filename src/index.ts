import { sumTwoNumbers, fullName } from './typeMismatch'
import {
  personFirstNameToUpperCase,
  areThereAnyMinors
} from './missingProperty'
import { fetchData, objectMerger } from './generics'
import { EventEmitter } from './finalExercise'

import type { Application } from 'express'

const express = require('express')
const app: Application = express()
const port = 3000

app.get('/first', async (_req, res) => {
  const exampleResult = sumTwoNumbers(1, '2')
  const exerciseResult = fullName('Andrea', 2)

  // Do not touch from this point onward.
  const JSONResult = {
    example: {
      type: typeof exampleResult,
      expectedType: 'number',
      result: exampleResult
    },
    exercise: {
      type: typeof exerciseResult,
      expectedType: 'string',
      result: exerciseResult
    }
  }

  res.json(JSONResult)
})

app.get('/second', async (_req, res) => {
  const exampleResult = personFirstNameToUpperCase({
    firstName: 'Andrea',
    age: 30
  })
  const exerciseResult = areThereAnyMinors([
    { birthYear: 1994 },
    { birthYear: 2018 }
  ])

  // Do not touch from this point onward.
  const JSONResult = {
    example: {
      type: typeof exampleResult,
      expectedType: 'string',
      result: exampleResult
    },
    exercise: {
      type: typeof exerciseResult,
      expectedType: 'boolean',
      result: exerciseResult
    }
  }

  res.json(JSONResult)
})

app.get('/third', async (_req, res) => {
  const exampleResult = await fetchData('students.json')
  const exerciseResult = objectMerger(
    { firstName: 'Andrea', age: 30 },
    { subject: 'Senior Software Engineer' }
  )

  // Do not touch from this point onward.
  const JSONResult = {
    example: {
      type: typeof exampleResult,
      expectedType: 'object',
      result: exampleResult[0].firstName
    },
    exercise: {
      type: typeof exerciseResult,
      expectedType: 'object',
      result: `${exerciseResult.firstName} ${exerciseResult.subject} ${exerciseResult.timesheet}`
    }
  }

  res.json(JSONResult)
})

type Message = {
  title: string
  content: string
}

type EventMap = {
  message: Message
  error: Error
  counter: number
}

// Replace any with the correct type
app.get('/final', async (_req, res) => {
  const eventEmitter = new EventEmitter()

  eventEmitter.on('message', (data: any) => {
    console.log('Message event emitted: ', JSON.stringify(data, null, 2))
    console.log('')
  })

  eventEmitter.on('error', (error: any) => {
    console.error('Error event emitted: ', error.message)
    console.log('')
  })

  eventEmitter.on('counter', (count: any) => {
    console.log('Counter event emitted: ', count)
    console.log('')
  })

  eventEmitter.emit('message', {
    title: 'This is a message',
    content: 'This is the content of a message'
  })

  eventEmitter.emit('error', new Error('An error occurred'))
  eventEmitter.emit('counter', 3)

  res.send('ok')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

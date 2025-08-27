import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3001

// Enable CORS for all routes
app.use(cors())
app.use(express.json())

// Mock event data
const mockEvents = [
  {
    id: "1",
    title: "Summer Music Festival",
    description: "A fantastic outdoor music festival featuring local bands",
    venue_name: "Central Park",
    start_time: "2024-07-15T18:00:00",
    city_name: "New York",
    region_abbr: "NY",
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    description: "Annual technology conference with industry leaders",
    venue_name: "Convention Center",
    start_time: "2024-08-20T09:00:00",
    city_name: "San Francisco",
    region_abbr: "CA",
  },
  {
    id: "3",
    title: "Food Truck Rally",
    description: "Delicious food from local food trucks",
    venue_name: "Downtown Square",
    start_time: "2024-07-22T12:00:00",
    city_name: "Austin",
    region_abbr: "TX",
  },
  {
    id: "4",
    title: "Art Gallery Opening",
    description: "New contemporary art exhibition opening",
    venue_name: "Modern Art Museum",
    start_time: "2024-07-30T19:00:00",
    city_name: "Chicago",
    region_abbr: "IL",
  },
  {
    id: "5",
    title: "Comedy Night",
    description: "Stand-up comedy show with local comedians",
    venue_name: "Laugh Track Club",
    start_time: "2024-08-05T20:00:00",
    city_name: "Los Angeles",
    region_abbr: "CA",
  },
  {
    id: "6",
    title: "Farmers Market",
    description: "Fresh produce and local goods",
    venue_name: "Town Square",
    start_time: "2024-07-25T08:00:00",
    city_name: "Portland",
    region_abbr: "OR",
  },
]

// Simple in-memory cache for server-side caching example
const serverCache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Helper function to simulate network delay
const simulateDelay = () => {
  return new Promise((resolve) => {
    // Random delay between 500ms and 2000ms to simulate real API latency
    const delay = Math.random() * 1500 + 500
    setTimeout(resolve, delay)
  })
}

// Search endpoint
app.get("/api/events/search", async (req, res) => {
  const { keywords, location } = req.query
  const cacheKey = `${keywords || ""}-${location || ""}`

  console.log(`Searching for events with keywords: "${keywords}", location: "${location}"`)

  // Check server-side cache first
  const cachedResult = serverCache.get(cacheKey)
  if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_DURATION) {
    console.log("Returning cached result")
    return res.json({
      events: cachedResult.data,
      cached: true,
      source: "server-cache",
    })
  }

  // Simulate API delay
  await simulateDelay()

  // Filter events based on search criteria
  let filteredEvents = mockEvents

  if (keywords) {
    const keywordLower = keywords.toLowerCase()
    filteredEvents = filteredEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(keywordLower) || event.description.toLowerCase().includes(keywordLower),
    )
  }

  if (location) {
    const locationLower = location.toLowerCase()
    filteredEvents = filteredEvents.filter(
      (event) =>
        event.city_name.toLowerCase().includes(locationLower) ||
        event.region_abbr.toLowerCase().includes(locationLower),
    )
  }

  // Cache the result
  serverCache.set(cacheKey, {
    data: filteredEvents,
    timestamp: Date.now(),
  })

  console.log(`Found ${filteredEvents.length} events`)

  res.json({
    events: filteredEvents,
    cached: false,
    source: "api",
  })
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Event API server running on port ${PORT}`)
  console.log(`Try: http://localhost:${PORT}/api/events/search?keywords=music&location=new`)
})

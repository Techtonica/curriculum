"use client"

import type React from "react"
import { useState, useCallback } from "react"

interface Event {
  id: string
  title: string
  description: string
  venue_name: string
  start_time: string
  city_name: string
  region_abbr: string
}

interface SearchResponse {
  events: Event[]
  cached: boolean
  source: string
}

// Client-side cache implementation
class ClientCache {
  private cache = new Map<string, { data: SearchResponse; timestamp: number }>()
  private readonly CACHE_DURATION = 2 * 60 * 1000 // 2 minutes
  private readonly MAX_CACHE_SIZE = 50 // Limit memory usage

  get(key: string): SearchResponse | null {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return { ...cached.data, cached: true, source: "client-cache" }
    }
    if (cached) {
      this.cache.delete(key) // Remove expired entry
    }
    return null
  }

  set(key: string, data: SearchResponse): void {
    // Implement LRU-like behavior by removing oldest entries when cache is full
    if (this.cache.size >= this.MAX_CACHE_SIZE) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    this.cache.set(key, {
      data: { ...data, cached: false },
      timestamp: Date.now(),
    })
  }

  clear(): void {
    this.cache.clear()
  }

  getStats(): { size: number; maxSize: number } {
    return {
      size: this.cache.size,
      maxSize: this.MAX_CACHE_SIZE,
    }
  }
}

const clientCache = new ClientCache()

const EventfulSearch: React.FC = () => {
  const [keywords, setKeywords] = useState("")
  const [location, setLocation] = useState("")
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchInfo, setSearchInfo] = useState<{
    cached: boolean
    source: string
    requestTime?: number
  } | null>(null)
  const [useClientCache, setUseClientCache] = useState(true)

  const searchEvents = useCallback(
    async (searchKeywords: string, searchLocation: string) => {
      const cacheKey = `${searchKeywords}-${searchLocation}`

      // Check client-side cache first (if enabled)
      if (useClientCache) {
        const cachedResult = clientCache.get(cacheKey)
        if (cachedResult) {
          setEvents(cachedResult.events)
          setSearchInfo({
            cached: true,
            source: cachedResult.source,
            requestTime: 0,
          })
          return
        }
      }

      setLoading(true)
      setError(null)
      const startTime = Date.now()

      try {
        const params = new URLSearchParams()
        if (searchKeywords) params.append("keywords", searchKeywords)
        if (searchLocation) params.append("location", searchLocation)

        const response = await fetch(`http://localhost:3001/api/events/search?${params}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: SearchResponse = await response.json()
        const requestTime = Date.now() - startTime

        setEvents(data.events)
        setSearchInfo({
          cached: data.cached,
          source: data.source,
          requestTime,
        })

        // Cache the result on client-side (if enabled and not already cached on server)
        if (useClientCache && !data.cached) {
          clientCache.set(cacheKey, data)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        setEvents([])
        setSearchInfo(null)
      } finally {
        setLoading(false)
      }
    },
    [useClientCache],
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchEvents(keywords, location)
  }

  const clearCache = () => {
    clientCache.clear()
    setSearchInfo(null)
  }

  const cacheStats = clientCache.getStats()

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Event Search</h2>

      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Search keywords (e.g., music, tech, food)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            style={{
              padding: "8px",
              marginRight: "10px",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="text"
            placeholder="Location (e.g., New York, CA)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              padding: "8px",
              marginRight: "10px",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "8px 16px",
              backgroundColor: loading ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={useClientCache}
              onChange={(e) => setUseClientCache(e.target.checked)}
              style={{ marginRight: "5px" }}
            />
            Enable client-side caching
          </label>
          <button
            type="button"
            onClick={clearCache}
            style={{
              padding: "4px 8px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Clear Cache
          </button>
        </div>
      </form>

      {/* Cache and Performance Info */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderRadius: "4px",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        <strong>Cache Stats:</strong> {cacheStats.size}/{cacheStats.maxSize} entries
        {searchInfo && (
          <div>
            <strong>Last Search:</strong> {searchInfo.cached ? "Cached" : "Fresh"}({searchInfo.source})
            {searchInfo.requestTime !== undefined && ` - ${searchInfo.requestTime}ms`}
          </div>
        )}
      </div>

      {error && (
        <div
          style={{
            color: "red",
            backgroundColor: "#f8d7da",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        >
          Error: {error}
        </div>
      )}

      {loading && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div>Searching for events...</div>
          <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
            (This may take 1-2 seconds to simulate real API latency)
          </div>
        </div>
      )}

      <div>
        <h3>Results ({events.length} events found)</h3>
        {events.length === 0 && !loading && !error && (
          <p style={{ color: "#666", fontStyle: "italic" }}>
            No events found. Try searching for "music", "tech", or "food"
          </p>
        )}

        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

// Separate component for individual events - good for optimization exercises
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  console.log(`Rendering EventCard for: ${event.title}`) // For debugging re-renders

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: "white",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>{event.title}</h4>
      <p style={{ margin: "0 0 8px 0", color: "#666" }}>{event.description}</p>
      <div style={{ fontSize: "14px", color: "#888" }}>
        <div>
          <strong>Venue:</strong> {event.venue_name}
        </div>
        <div>
          <strong>Location:</strong> {event.city_name}, {event.region_abbr}
        </div>
        <div>
          <strong>Date:</strong> {new Date(event.start_time).toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}

export default EventfulSearch

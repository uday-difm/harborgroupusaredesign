# Blog Update Fix - Deployment Instructions

## Issues Found

1. **Docker container is running old code** - The edit-blog endpoint is not being called
2. **Next.js config had invalid settings** - Fixed in `next.config.mjs`
3. **Route not being recognized** - Need to rebuild the Next.js app

## Steps to Fix

### 1. Rebuild the Docker Image
```bash
# Stop and remove the old container
docker stop harborgroupusa-container
docker rm harborgroupusa-container

# Remove the old image
docker rmi harborgroupusa:latest

# Rebuild with no cache to ensure fresh build
docker build --no-cache -t harborgroupusa:latest .
```

### 2. Run the New Container
```bash
docker run -d \
  --name harborgroupusa-container \
  -p 3000:3000 \
  --env-file .env \
  harborgroupusa:latest
```

### 3. Verify the Deployment
```bash
# Check logs for the new console messages
docker logs -f harborgroupusa-container
```

### 4. Test the Update
- Go to the blog update page
- Try updating a blog
- You should see in the logs:
  ```
  === EDIT BLOG PUT REQUEST RECEIVED ===
  Request URL: ...
  Params: { id: '...' }
  ```

## What Was Fixed

### File: `next.config.mjs`
- ✅ Removed invalid `api` configuration
- ✅ Updated `images.domains` to `images.remotePatterns` (new Next.js standard)

### File: `src/app/api/dashboard/edit-blog/[id]/route.js`
- ✅ Added validation for required fields
- ✅ Added detailed console logging
- ✅ Fixed existingImage handling with null fallback
- ✅ Added query execution logging

### File: `src/app/dashboard/update-blog/[id]/page.js`
- ✅ Already correct - sends to `/api/dashboard/edit-blog/${id}`
- ✅ Properly handles existingImage vs new image

## Expected Behavior After Fix

1. When updating a blog WITHOUT changing the image:
   - Frontend sends `existingImage` in FormData
   - Backend uses existing image URL
   - No S3 upload occurs

2. When updating a blog WITH a new image:
   - Frontend sends new file as `blog_feature_image`
   - Backend uploads to S3
   - Database updated with new URL

3. Error messages will show detailed information for debugging

## Troubleshooting

If it still doesn't work after rebuild:

1. **Check Docker logs for the new console messages**
   ```bash
   docker logs harborgroupusa-container | grep "EDIT BLOG"
   ```

2. **Verify the route file is in the image**
   ```bash
   docker exec harborgroupusa-container ls -la /app/src/app/api/dashboard/edit-blog/[id]/
   ```

3. **Check Next.js build output**
   ```bash
   docker logs harborgroupusa-container | grep "edit-blog"
   ```

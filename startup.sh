docker run -d --name redis redis
docker run -d -e DOCKER=true --name web -p 3000:3000 hn_history bash -lc "cd /app && bundle exec foreman start web"
docker run -d -e DOCKER=true --link redis:redis hn_history bash -lc "cd /app && bundle exec foreman start resque"
docker run -d -e DOCKER=true --link redis:redis hn_history bash -lc "cd /app && bundle exec foreman start clockwork"

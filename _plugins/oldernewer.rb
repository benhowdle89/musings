module Jekyll
  class OlderNewerGenerator < Generator
    priority :high
 
    def generate(site)
      site.posts.each_with_index do |post, i|
        post.data['older'] = site.posts[i - 1]  if i > 0
        post.data['newer'] = site.posts[i + 1]
      end
    end
  end
end
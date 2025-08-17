import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import { getNewsById, newsData } from '../data/news';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = getNewsById(id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
        <p className="text-muted-foreground mb-6">
          L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Button onClick={() => navigate('/news')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux actualités
        </Button>
      </div>
    );
  }

  // Articles suggérés (3 articles les plus récents, excluant l'article actuel)
  const suggestedArticles = newsData
    .filter(item => item.id !== article.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erreur lors du partage:', err);
      }
    } else {
      // Fallback: copier l'URL dans le presse-papiers
      navigator.clipboard.writeText(window.location.href);
      // Vous pourriez ajouter une notification ici
    }
  };

  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate('/news')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux actualités
          </Button>
        </div>
      </section>

      {/* Article principal */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* En-tête de l'article */}
            <header className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Badge>{article.category}</Badge>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
              </div>
            </header>

            {/* Image principale */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Extrait */}
            <div className="text-xl text-muted-foreground mb-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
              {article.excerpt}
            </div>

            {/* Contenu de l'article */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </article>

      {/* Articles suggérés */}
      {suggestedArticles.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Articles suggérés</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {suggestedArticles.map((suggestedArticle) => (
                  <Card key={suggestedArticle.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={suggestedArticle.image} 
                        alt={suggestedArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {suggestedArticle.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(suggestedArticle.date).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        {suggestedArticle.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {suggestedArticle.excerpt}
                      </p>
                      
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to={`/news/${suggestedArticle.id}`}>
                          Lire l'article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/news">
                    Voir toutes les actualités
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetail;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { Plus, Edit, Trash2, Eye, Star, Clock, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useState({
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    memberSince: "January 2024"
  });

  const [userAds] = useState([
    {
      id: "1",
      title: "2BHK Apartment for Rent in Kochi",
      category: "Residential Rental",
      city: "Kochi",
      status: "approved",
      isFeatured: true,
      postedDate: "2 hours ago",
      views: 156,
      expiryDate: "March 15, 2024"
    },
    {
      id: "2",
      title: "Maruti Swift for Sale - 2018 Model", 
      category: "Personal Vehicle Sales",
      city: "Kozhikode",
      status: "pending",
      isFeatured: false,
      postedDate: "1 day ago", 
      views: 23,
      expiryDate: "April 20, 2024"
    },
    {
      id: "3",
      title: "Construction Services Available",
      category: "Construction Services", 
      city: "Thrissur",
      status: "rejected",
      isFeatured: false,
      postedDate: "3 days ago",
      views: 8,
      expiryDate: "-"
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'rejected': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const approvedAds = userAds.filter(ad => ad.status === 'approved');
  const pendingAds = userAds.filter(ad => ad.status === 'pending');
  const rejectedAds = userAds.filter(ad => ad.status === 'rejected');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}</p>
            </div>
            <Link to="/submit-ad">
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Post New Ad
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Ads</p>
                    <p className="text-2xl font-bold">{userAds.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Ads</p>
                    <p className="text-2xl font-bold text-green-600">{approvedAds.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending Review</p>
                    <p className="text-2xl font-bold text-yellow-600">{pendingAds.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Views</p>
                    <p className="text-2xl font-bold">{userAds.reduce((sum, ad) => sum + ad.views, 0)}</p>
                  </div>
                  <div className="w-12 h-12 bg-kerala-blue/10 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-kerala-blue" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ads Management */}
          <Card>
            <CardHeader>
              <CardTitle>My Advertisements</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All Ads ({userAds.length})</TabsTrigger>
                  <TabsTrigger value="approved">Active ({approvedAds.length})</TabsTrigger>
                  <TabsTrigger value="pending">Pending ({pendingAds.length})</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected ({rejectedAds.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {userAds.map((ad) => (
                    <Card key={ad.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {ad.isFeatured && (
                                <Badge className="bg-kerala-gold text-white">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                              <Badge variant="secondary" className="text-xs">
                                {ad.category}
                              </Badge>
                              <Badge className={getStatusColor(ad.status)}>
                                {getStatusIcon(ad.status)}
                                <span className="ml-1 capitalize">{ad.status}</span>
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{ad.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{ad.city}</span>
                              <span>{ad.postedDate}</span>
                              <span>{ad.views} views</span>
                              {ad.status === 'approved' && (
                                <span>Expires: {ad.expiryDate}</span>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="approved" className="space-y-4">
                  {approvedAds.map((ad) => (
                    <Card key={ad.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {ad.isFeatured && (
                                <Badge className="bg-kerala-gold text-white">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                              <Badge variant="secondary" className="text-xs">
                                {ad.category}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{ad.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{ad.city}</span>
                              <span>{ad.views} views</span>
                              <span>Expires: {ad.expiryDate}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="pending" className="space-y-4">
                  {pendingAds.map((ad) => (
                    <Card key={ad.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-yellow-100 text-yellow-800">
                                <Clock className="w-3 h-3 mr-1" />
                                Under Review
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {ad.category}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{ad.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{ad.city}</span>
                              <span>Submitted {ad.postedDate}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="rejected" className="space-y-4">
                  {rejectedAds.map((ad) => (
                    <Card key={ad.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-red-100 text-red-800">
                                <XCircle className="w-3 h-3 mr-1" />
                                Rejected
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {ad.category}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{ad.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{ad.city}</span>
                              <span>{ad.postedDate}</span>
                            </div>
                            <p className="text-sm text-red-600 mt-2">
                              Reason: Content did not meet our guidelines. Please revise and resubmit.
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
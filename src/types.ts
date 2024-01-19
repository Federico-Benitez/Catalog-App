export interface EventResponse {
  pagination: Pagination;
  data: Event[];
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Event {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  title_display: null;
  image_url: string;
  hero_caption: string;
  short_description: string;
  header_description: null;
  list_description: null;
  description: string;
  location: string;
  event_type_id: number;
  alt_event_type_ids: any[];
  audience_id: number;
  alt_audience_ids: any[];
  program_ids: any[];
  program_titles: any[];
  is_ticketed: boolean;
  ticketed_event_id: number;
  rsvp_link: string;
  buy_button_text: string;
  buy_button_caption: string;
  is_registration_required: boolean;
  is_member_exclusive: boolean;
  is_sold_out: boolean;
  is_free: boolean;
  is_private: boolean;
  is_admission_required: boolean;
  is_after_hours: boolean;
  is_virtual_event: boolean;
  virtual_event_url: null;
  virtual_event_passcode: null;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  date_display: string;
  door_time: null;
  layout_type: number;
  slug: string;
  entrance: null;
  join_url: null;
  survey_url: null;
  event_host_id: null;
  event_host_title: null;
  search_tags: null;
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

class SongsController < ApplicationController
  before_action :set_song, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  
  # GET /songs
  def index
    @songs = Song.all.order("id DESC")

    render json: @songs
  end

  # GET /songs/1
  def show
    render json: @song, :include => :user, status: :ok
  end

  # POST /songs
  def create
    # binding.pry
    song = Song.new(song_params)
    # song.user = @current_user

    if song.save
      song.save!
      render json: song, status: :created, location: song
    else
      render json: song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songs/1
  def destroy
    @song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = song.find(params[:id])
    end

    def set_user_song
      @song = @current_user.songs.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.require(:song).permit(:song)
    end
end
